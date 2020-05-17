require 'elasticsearch/extensions/test/cluster'
require './spec/helpers/elasticsearch_helper'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  # backwards compatibility
  config.shared_context_metadata_behavior = :apply_to_host_groups

  config.example_status_persistence_file_path = "spec/examples.txt"
  config.filter_run_when_matching :focus
  config.disable_monkey_patching!
  # config.profile_examples = 5
  config.order = :random
  Kernel.srand config.seed

  config.include ElasticsearchHelper

  config.before :all, elasticsearch: true do
    unless Elasticsearch::Extensions::Test::Cluster.running?(port: 9250)
      Elasticsearch::Extensions::Test::Cluster.start()
    end
  end

  config.after :suite do
    if Elasticsearch::Extensions::Test::Cluster.running?(port: 9250)
      Elasticsearch::Extensions::Test::Cluster.stop
    end
  end

  config.before :example, elasticsearch: true do
    EsQueryService::MODELS_TO_SEARCH.each do |model|
      begin
        model.__elasticsearch__.create_index!
      rescue Elasticsearch::Transport::Transport::Errors::NotFound => e
        puts "There was an error creating the elasticsearch index
              for #{model.name}: #{e.inspect}"
      end
    end
  end

  config.after :example, elasticsearch: true do
    EsQueryService::MODELS_TO_SEARCH.each do |model|
      begin
        model.__elasticsearch__.delete_index!
      rescue Elasticsearch::Transport::Transport::Errors::NotFound => e
        puts "There was an error deleting the elasticsearch index
              for #{model.name}: #{e.inspect}"
      end
    end
  end
end
