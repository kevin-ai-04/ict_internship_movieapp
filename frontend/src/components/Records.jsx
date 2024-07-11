import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'name',
    headerName: 'Movie Name',
    width: 200,
  },
  {
    field: 'year',
    headerName: 'Year',
    type: 'number',
    width: 100,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
  },
  {
    field: 'director',
    headerName: 'Director',
    width: 200,
  },
];

const rows = [
  { id: 1, name: 'Titanic', year: 1997, category: 'Romance', director: 'James Cameron' },
  { id: 2, name: 'The Shawshank Redemption', year: 1994, category: 'Drama', director: 'Frank Darabont' },
  { id: 3, name: 'The Godfather', year: 1972, category: 'Crime', director: 'Francis Ford Coppola' },
  { id: 4, name: 'The Dark Knight', year: 2008, category: 'Action', director: 'Christopher Nolan' },
  { id: 5, name: 'Pulp Fiction', year: 1994, category: 'Crime', director: 'Quentin Tarantino' },
  { id: 6, name: 'Forrest Gump', year: 1994, category: 'Drama', director: 'Robert Zemeckis' },
  { id: 7, name: 'Inception', year: 2010, category: 'Sci-Fi', director: 'Christopher Nolan' },
  { id: 8, name: 'Fight Club', year: 1999, category: 'Drama', director: 'David Fincher' },
  { id: 9, name: 'The Matrix', year: 1999, category: 'Sci-Fi', director: 'The Wachowskis' },
];

const Records = () => {
  return (
    <div id="table" style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default Records;
