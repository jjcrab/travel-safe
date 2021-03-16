import React from 'react';

const About = () => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '1fr 1fr 1fr 1fr',
				marginTop: '1.5rem',
			}}>
			<div>
				<h3>Extreme Warning (risk score: 4.5 - 5)</h3>
				<p>
					You should avoid any trips. A high warning index is a sound indicator
					of potential harm to your health and well-being.
				</p>
			</div>
			<div>
				<h3>High Risk (risk score: 3.5 - 4.5)</h3>
				<p>
					Travel should be reduced to a necessary minimum and be conducted with
					good preparation and high attention.
				</p>
			</div>
			<div>
				<h3>Medium Risk (risk score: 2.5 - 3.5)</h3>
				<p>
					Warnings often relate to specific regions within a country. However,
					high attention is still advised when moving around.
				</p>
			</div>
			<div>
				<h3>Low Risk Low Risk (risk score: 0 - 2.5)</h3>
				<p>
					Usually this is an indicator that travelling in this country is
					relatively safe. Higher attention is advised with values > 1.
				</p>
			</div>
		</div>
	);
};

export default About;
