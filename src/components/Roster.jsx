import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import RequiresLogin from './RequiresLogin';
import TopAppBar from './TopAppBar';
import RosterList from './RosterList';
import StudentForm from './StudentForm';

export class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = { editingStudent: null };
    this.editStudent = this.editStudent.bind(this);
  }

  editStudent(editingStudent) {
    this.setState({
      editingStudent,
    });
  }

  render() {
    const { students, history } = this.props;
    const { editingStudent } = this.state;

    return (
      <div>
        <TopAppBar pageTitle="Roster" history={history} />
        {
          editingStudent
            ? (<StudentForm
              editingStudent={editingStudent}
              editStudent={this.editStudent}
            />
            )
            : (<RosterList
              students={students}
              editStudent={this.editStudent}
            />
            )
        }
      </div>
    );
  }
}

Roster.propTypes = {
  students: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  students: state.user.students,
});

export default compose(
  RequiresLogin(),
  connect(mapStateToProps),
)(Roster);
