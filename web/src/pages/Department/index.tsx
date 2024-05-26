import Page from '../../components/Page';
import ListView from '../../components/ListView';

function Department() {
  return (
    <Page title='Departments'>
      <ListView
        resource='departments'
        tableProps={{
          columns: [
            {
              key: 'id',
              label: 'ID',
            },
            {
              key: 'name',
              label: 'Name',
            },
          ],
        }}
      />
    </Page>
  );
}

export default Department;
