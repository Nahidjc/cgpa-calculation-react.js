import React, { Component } from 'react';
import Course from './components/Course';

class App extends Component {
  state = {
    courses: [
      { credit: 3, grade: 4.0 },

    ]
  }
  handleChange = (i, change) => {
    const courses = this.state.courses.slice();
    courses[i] = { ...courses[i], ...change };
    this.setState({ courses: courses });
  }
  addCourse() {
    this.setState({
      courses: [...this.state.courses, { credit: 3, grade: 4.0 }]
    })
  }
  render() {
    let totalCredits = 0, totalGrade = 0;
    const courses = this.state.courses.map((course, i) => {
      totalCredits += course.credit;
      totalGrade += course.grade;
      return <Course index={i} handleChange={this.handleChange.bind(this)} />;
    })
    return (
      <div className="container">
        {courses}
        <button className="button is-primary is-rounded" onClick={this.addCourse.bind(this)}>+</button>
        <div className="control is-centered">
          <div className="gpa tags has-addons">
            <div className="tag is-dark">
              <div className="tag is-info">
                <p>{(totalGrade / totalCredits).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
