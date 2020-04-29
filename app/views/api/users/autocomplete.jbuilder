json.status 200

json.data @hints.each do |user|
  json.score user._score
  json.partial! 'api/users/user', user: user
end
