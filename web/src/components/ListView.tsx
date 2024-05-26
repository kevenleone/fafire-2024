import { Button, useToast } from '@chakra-ui/react';
import { ComponentProps, useEffect, useState } from 'react';

import Table from './Table';

interface ListViewProps {
  resource: string;
  tableProps: Omit<ComponentProps<typeof Table>, 'rows'>;
}

function ListView(props: ListViewProps) {
  const toast = useToast();
  const [rows, setRows] = useState([]);

  async function handleDelete(row: any) {
    const response = await fetch(
      `http://192.168.201.228:8080/${props.resource}/${row.id}`,
      {
        method: 'DELETE',
      }
    );

    if (response.ok) {
      await fetchData();

      return toast({
        title: `${props.resource} deleted with success.`,
        description: `We've deleted ${props.resource} for you.`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }

    toast({
      title: `failed to delete ${props.resource}`,
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }

  const fetchData = () => {
    fetch(`http://192.168.201.228:8080/${props.resource}`)
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Table
      columns={[
        ...props.tableProps.columns,
        {
          key: 'actions',
          label: 'Actions',
          render: (_, row) => {
            return (
              <div>
                <Button>Edit</Button>
                <Button
                  marginLeft={4}
                  colorScheme='red'
                  onClick={() => handleDelete(row)}
                >
                  Delete
                </Button>
              </div>
            );
          },
        },
      ]}
      rows={rows}
    />
  );
}

export default ListView;
