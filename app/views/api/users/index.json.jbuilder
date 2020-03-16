json.status 200

json.data do
  json.users @users.each do |user|
    json.score user._score
    json.partial! 'api/users/user', user: user
  end
end
