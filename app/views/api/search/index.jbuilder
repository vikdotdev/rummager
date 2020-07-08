json.status 200

json.aggs @search.aggregations
json.data @search.results.each do |result|
  json.type index_to_model(result)
  json.highlight result.respond_to?(:highlight) && result.highlight
  json.call(result, :id, *result_search_fields(result))
end
