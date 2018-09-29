import React, { Component } from 'react';
import TopAppBar from './TopAppBar';
import RequiresLogin from './RequiresLogin';
import WorkshopList from './WorkshopList';
import WorkshopForm from './WorkshopForm';

export class Workshops extends Component {
  state = {
    editingWorkshop: null,
  }

  editWorkshop = (editingWorkshop) => {
    this.setState({
      editingWorkshop,
    });
  }

  render() {
    const { editingWorkshop } = this.state;
    const { history } = this.props;

    return (
      <div>
        <TopAppBar pageTitle="Workshops" history={history}/>
        {
          editingWorkshop
            ? (
              <WorkshopForm
                editingWorkshop={editingWorkshop}
                editWorkshop={this.editWorkshop}
              />
            )
            : (
              <WorkshopList
                editWorkshop={this.editWorkshop}
              />
            )
        }

      </div>
    );
  }
}

export default RequiresLogin()(Workshops);
