json.status 200

json.suggestions @hints.each do |result|
  json.type index_to_model(result)
  json.highlight result.highlight
  json.call(result, :id, *result_search_fields(result))
end
