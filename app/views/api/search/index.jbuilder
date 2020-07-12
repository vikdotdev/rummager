json.status 200

json.aggs @search.aggregations
json.results @search.results.each do |result|
  json.type index_to_model(result)
  json.highlight result.respond_to?(:highlight) && result.highlight
  json.call(result, :id, *result_search_fields(result))
end

json.global_aggs @stats.aggregations
