import React, { Component } from 'react';
import MenuAppBar from './MenuAppBar';
import requiresLogin from './requiresLogin';
import WorkshopList from './WorkshopList';
import WorkshopForm from './WorkshopForm';

class Workshops extends Component {

	state = {
		editingWorkshop: null
	}

	editWorkshop = (editingWorkshop) => {
		this.setState({
			editingWorkshop,
		});
		console.log(editingWorkshop)
	}

	render() {
		const { editingWorkshop } = this.state;

		return (
			<div>
				<MenuAppBar pageTitle="Workshops" />
				{
					editingWorkshop
					?(<WorkshopForm
							editingWorkshop={ editingWorkshop }
							editWorkshop={ this.editWorkshop }
						/>
					 )
					:(
						<WorkshopList
							editWorkshop= { this.editWorkshop }
						/>
					 )
				}

			</div>
		);
	}

}

export default requiresLogin()(Workshops);