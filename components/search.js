import React from 'react'
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearchSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
  }
  fetchResults = (query) => {
    const url = `${process.env.URL}/api/posts`;
    if (query.length < 1) {
      this.setState({ results: {}, message: '', loading: false });
      //console.log(this.state);
    } else {
      Axios.get(url)
        .then(res => {
          const resultsNew = res.data.posts.filter((el) => {
            return el.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
          })
          const message = (resultsNew.length < 1) ? 'No Results' : `${resultsNew.length} Post Found`;
          this.setState({ results: resultsNew, message: message, loading: false });
          //console.log(this.state);
          //console.log(message);
          //console.log(results.length);
          //console.log(resultsNew);
        })
        .catch(err => false);
    }
  }

  handleChange(event) {
    const query = event.target.value;
    this.setState({ query: query, loading: true }, () => {
      this.fetchResults(query)
    });
  }

  render() {
    return (
      <form className="search_area active" onSubmit={this.handleSearchSubmit}>
        <div className="search_area-content">
          <div className="search_area-content-title">Search in Blog</div>
          <div className="input_cover">
            <input className="form-control" type="text" placeholder="Search" required="required" value={this.state.value} onChangeCapture={this.handleChange} />
            <svg>
              <use xlinkHref="#search"></use>
            </svg>
          </div>
          <div className="results_message">{this.state.message}</div>
          <div className="results nice_scroll">
            {this.state.results.length > 0 &&
              <div className="row">

                {this.state.results.slice(0, 10).map((post, key) => (

                  <div className="col-sm-6" >
                    <Link href="/contact" key={key}>
                      <div className="results-item">
                        <div className="results-item-title">{post.title}</div>
                        <div className="results-item-summary">{post.summary}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
        <svg className="search_area-close">
          <use xlinkHref="#delete"></use>
        </svg>
      </form>

    );
  }
}

export default Search;