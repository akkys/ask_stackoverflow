import React, { Component } from "react";

import LoadingPage from "./LoadingPage";
import NavigationBar from "./NavigationBar";
import Pagination from "./Pagination";
import TopQuestions from "./TopQuestions";
import Header from "./Header";

class MainApp extends Component {
  state = {
    questions: [],
    isLoading: false,
    currentPage: 1,
    quesPerPage: 10,
    title: "Top Questions"
  };

  //To display Top Questions on the Home Page
  async componentDidMount() {
    const url =
      "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ questions: data.items, isLoading: true });
    console.log(this.state.questions);
  }

  //To search the Questions from StackOverFlow API
  formSubmit = async e => {
    const searchQue = e.target.elements.searchQue.value;
    e.preventDefault();
    const api_call = `https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&title=${searchQue}&site=stackoverflow`;
    const response = await fetch(api_call);
    const data = await response.json();
    this.setState({
      questions: data.items,
      isLoading: true,
      title: "Search Results"
    });
  };

  paginate = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { currentPage, quesPerPage, questions, isLoading } = this.state;

    const indexofLastPage = currentPage * quesPerPage;
    const indexofFirstPage = indexofLastPage - quesPerPage;
    const currentPageQue = questions.slice(indexofFirstPage, indexofLastPage);

    return (
      <div>
        <NavigationBar formSubmit={this.formSubmit} />

        {!isLoading ? (
          <LoadingPage />
        ) : (
          <div>
            <Header
              title={this.state.title}
              totalQuestions={this.state.questions}
            />
            <TopQuestions
              questions={currentPageQue}
              loading={this.state.isloading}
            />
            <Pagination
              quePerPage={quesPerPage}
              totalQues={questions.length}
              paginate={this.paginate}
            />
          </div>
        )}
      </div>
    );
  }
}

export default MainApp;
