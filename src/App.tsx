
import { Admin, Resource, List, Datagrid, TextField, ReferenceField, EditButton, ShowButton, Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, Show, SimpleShowLayout, ReferenceManyField, SingleFieldList, ChipField } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const PostList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);
const PostEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

const PostCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
const PostShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceManyField reference="comments" target="postId">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);
const CommentList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);
const CommentEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);
const CommentCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <ReferenceInput source="postId" reference="posts">
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            show={PostShow}
        />
        <Resource
            name="comments"
            list={CommentList}
            edit={CommentEdit}
            create={CommentCreate}
        />
    </Admin>
);

export default App;
