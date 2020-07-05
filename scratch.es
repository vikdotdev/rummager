GET /users,projects/_search
{
  "query": {
    "multi_match": {
      "query": "her",
      "fields": ["name", "last_name"]
    }
  }
}


GET /users,projects/_search
{
  "bool": {

  }
  "query": {
    "multi_match": {
      "query": "her",
      "fields": ["name", "last_name"]
    }
  }
}


GET /projects/_search
{
  "size": 0,
  "aggs": {
    "rating_stats": {
      "stats": {
        "field": "rating"
      }
    },
    "distinct_ratings": {
      "terms": {
        "field": "rating"
      }
    }
  }
}


GET /users,projects/_search
{
  "query": {
    "bool": {
      "must": {
        "multi_match": {
          "query": "Runolfsdot",
          "fields": ["name", "last_name"]
        }
      }
      // "filter": {
      //   "range": {
      //     "rating": {
      //       "gt": 1
      //     }
      //   }
      // }
    }
  },
  "size": 1,
  "aggs": {
    "rating_stats": {
      "stats": {
        "field": "rating"
      }
    },
    "distinct_ratings": {
      "terms": {
        "field": "rating"
      }
    }
  },
  "highlight": {
    "pre_tags": ["<em class='hl'>"],
    "post_tags": ["</em>"],
    "number_of_fragments": 0,
    "boundary_max_scan": 50,
    "fields": {
      "first_name": {},
      "last_name": {},
      "name": {}
    }
  }
}
