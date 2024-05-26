import Page from '../../components/Page';
import ListView from '../../components/ListView';

function Professor() {
  return (
    <Page title='Professors'>
      <ListView
        resource='professors'
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
            {
              key: 'cpf',
              label: 'CPF',
            },
            {
              key: 'department',
              label: 'Department',
              render: (department) => {
                return <span style={{ color: 'red' }}>{department.name}</span>;
              },
            },
          ],
        }}
      />
    </Page>
  );
}

export default Professor;
