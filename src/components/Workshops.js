import React, { Component } from 'react';
import MenuAppBar from './MenuAppBar';
import requiresLogin from './requiresLogin';
import WorkshopList from './WorkshopList';
import WorkshopForm from './WorkshopForm';

class Workshops extends Component {

	constructor(props) {
		super(props);
		this.state = {
			editingWorkshop: null
		}
		this.editWorkshop = this.editWorkshop.bind(this);
	}

	editWorkshop(editingWorkshop) {
		this.setState({
			editingWorkshop,
		});
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