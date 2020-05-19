# TODO
* check out ES aggregations (like filters in rozetka)
* inline edit in sidebar
* highlighting
* full text queries
* add cucumber integration test
* on results page add button "download results" with CSV attachment
* create "stats" page which will list of top 10 projects, and top 10 users

# DOING
* api specs
* inline edit
* watching ES course

# DONE
* fix heroku assets(css add to layout)

# ES ERRORS
following error when trying to search string in numeric field:
{
  "took" : 6,
  "timed_out" : false,
  "_shards" : {
    "total" : 8,
    "successful" : 7,
    "skipped" : 0,
    "failed" : 1,
    "failures" : [
      {
        "shard" : 0,
        "index" : "projects",
        "node" : "KpL5FIM3TUyRHdmgW588tA",
        "reason" : {
          "type" : "query_shard_exception",
          "reason" : """
failed to create query: {
  "multi_match" : {
    "query" : "willy",
    "fields" : [
      "first_name^1.0",
      "last_name^1.0",
      "name^1.0",
      "rating^1.0"
    ],
    "type" : "best_fields",
    "operator" : "OR",
    "slop" : 0,
    "prefix_length" : 0,
    "max_expansions" : 50,
    "zero_terms_query" : "NONE",
    "auto_generate_synonyms_phrase_query" : true,
    "fuzzy_transpositions" : true,
    "boost" : 1.0
  }
}
""",
          "index_uuid" : "TTFbNUw2QXu6PTQyyxG3xg",
          "index" : "projects",
          "caused_by" : {
            "type" : "number_format_exception",
            "reason" : """For input string: "willy""""
          }
        }
      }
    ]
  },
  "hits" : {
    "total" : {
      "value" : 1,
      "relation" : "eq"
    },
    "max_score" : 2.0794415,
    "hits" : [
      {
        "_index" : "users",
        "_type" : "_doc",
        "_id" : "274",
        "_score" : 2.0794415,
        "_source" : {
          "id" : 274,
          "first_name" : "Willy",
          "last_name" : "Wonka",
          "bio" : "Excepturi in tempore. Ipsa atque occaecati. Ipsam nostrum error.",
          "created_at" : "2020-05-19T12:29:54.594Z",
          "updated_at" : "2020-05-19T12:29:54.594Z"
        }
      }
    ]
  }
}
