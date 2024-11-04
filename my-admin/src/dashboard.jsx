import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Title } from 'react-admin';

export const Dashboard = () => (
    <Card>
        <Title title="Pirate Captain’s Command Center" />
        <CardContent>
            <div align="center">
                <img src="logo.png" style={{ width: '350px' , height: 'auto' }} />
            </div>
            <Typography paragraph align="center">
            The dashboard serves as the central hub for managing the Straw Hat Pirates’ activities. As soon as the user (the captain or high-ranking crew member) logs in, they’re greeted with an overview of the current missions, crew details, recent treasures acquired, and notifications for any pending or urgent tasks. The layout is designed to feel like a captain's logbook, with a parchment background, nautical icons, and a map theme reminiscent of a classic pirate treasure map. Key sections include Mission Status, Crew Overview, and Treasure Inventory.
            </Typography>
            <Typography paragraph align="center">
                <strong>Crew Overview:</strong><br />
                Displays each crew member with their role, status, and any recent achievements.<br />
                Health or morale indicators for each crew member, letting the captain know if anyone needs attention.<br />
                A quick link to each member’s profile and assigned missions.
            </Typography>
            <Typography paragraph align="center">
                <strong>Mission Status:</strong><br />
                Displays all ongoing missions with filters for Pending, In Progress, and Completed.<br />
                Shows each mission’s title, assigned crew member, and current status at a glance.<br />
                Option to view more details about each mission, including the objective and any required resources.
            </Typography>
            <Typography paragraph align="center">
                <strong>Treasure Inventory:</strong><br />
                Displays a list of treasures acquired by the crew with their names, estimated value, and brief descriptions.<br />
                Total belly value of all treasures displayed as a grand total at the top.
            </Typography>
        </CardContent>
    </Card>
);