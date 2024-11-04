import { List, Datagrid, TextField ,Create, SimpleForm, TextInput, ImageInput,ImageField, ReferenceField } from 'react-admin';
export const CrewList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="Pirate_id" reference="users">
                <TextField source="name" label="Crew Name" />
            </ReferenceField>
            {/* <ReferenceField source="Pirate_id" reference="users">
                <TextField source="Crew_Role" label="Crew Role" />
            </ReferenceField> */}
            <ReferenceField source="crew_id" reference="Crews">
                <TextField source="name" label="Crew Name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const CrewCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Name" />
            <TextInput source="Crew_Role" label="Crew Role" />
            <ImageInput source="avatar" label="View" />
        </SimpleForm>
    </Create>
);