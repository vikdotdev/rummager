json.status 200

json.data @results.each do |result|
  json.type index_to_model(result)
  json.highlight result.highlight
  json.call(result, :id, *result_search_fields(result))
end
