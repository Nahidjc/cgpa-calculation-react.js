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
    let totalCredits = 0, totalGrade = 0, totalGpa = 0;
    const courses = this.state.courses.map((course, i) => {
      let credit = course.credit
      let grade = course.grade
      totalGpa = credit * grade;
      totalCredits += credit;
      totalGrade += totalGpa;
      return <Course index={i} handleChange={this.handleChange.bind(this)} />;
    })
    return (
      <div className="container my-5" >
        {courses}
        <button className="button is-primary is-rounded " onClick={this.addCourse.bind(this)}>+</button>


        <div className="control is-centered">
          <div className="gpa tags has-addons">
            <span className="tag is-dark">GPA</span>
            <span className="tag is-info">{(totalGrade / totalCredits).toFixed(2)}</span>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
