import { List, Datagrid, TextField ,Create, SimpleForm, TextInput, ReferenceField, ReferenceInput, SelectInput} from 'react-admin';
export const CrewList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="Pirate_id" reference="users">
                <TextField source="name" label="Crew Name" />
            </ReferenceField>
            <TextField source="Name" label="New Pirate Name" />
            <ReferenceField source="Pirate_id" reference="users" label="Crew Role">
                <TextField source="Crew_Role"/>
            </ReferenceField>
            <ReferenceField source="crew_id" reference="Crews">
                <TextField source="name" label="Crew Name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const CrewCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Name" label="New Pirate Name" />
            <ReferenceInput source="Pirate_id" reference="users" label="Crew Role">
                <SelectInput source="Crew_Role" label="Crew Role" choices={[
                    { id: 'Captain', name: 'Captain' },
                    { id: 'First Mate', name: 'First Mate' },
                    { id: 'Crew', name: 'Crew' },
                ]}/>
            </ReferenceInput>
            <ReferenceInput label="Crew" source="crew_id"  reference='Crews'>
                <SelectInput source="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
