module ElasticsearchHelper
  def refresh_index!
    EsQueryService::MODELS_TO_SEARCH.each do |model|
      begin
        model.__elasticsearch__.refresh_index!
      rescue Elasticsearch::Transport::Transport::Errors::NotFound => e
        puts "There was an error creating the elasticsearch index
              for #{model.name}: #{e.inspect}"
      end
    end
  end
end
