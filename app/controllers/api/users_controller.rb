class Api::UsersController < ActionController::API
  def index
    @users = User.search(search_query).results
  end

  def autocomplete
    query = search_query(analyzer: 'autocomplete', size: 10)
    @hints = User.search(query).results
  end

  private

  def search_query(analyzer: nil, fuzziness: nil, size: nil)
    {
      size: size,
      query: {
        multi_match: {
          query: keywords,
          analyzer: analyzer,
          fuzziness: fuzziness,
          fields: %w[first_name last_name]
        }.compact
      }
    }.compact
  end

  def keywords
    params[:keywords].join(' ')
  end
end
