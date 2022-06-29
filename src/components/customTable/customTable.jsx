import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './customTable.scss';
import { arrangeDigits, getWaterSurfaceArea, sortByPlanetName } from '../../utils/utils';

const CustomTable = ({ data }) => {
  const rows = data.sort(sortByPlanetName);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='one-pgbr'><b>Planet Name</b></TableCell>
            <TableCell className='one-pgbr' align="center"><b>Climate</b></TableCell>
            <TableCell className='one-pgbr' align="center"><b>Residents</b></TableCell>
            <TableCell className='one-pgbr' align="center"><b>Terrain</b></TableCell>
            <TableCell className='one-pgbr' align="center"><b>Population</b></TableCell>
            <TableCell className='one-pgbr' align="center"><b>Surface Area Covered by Water&nbsp;(km<sup>2</sup>)</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='one-pgbr' component="th" scope="row">
                <a 
                  href={`${row.url}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {row.name}
                </a>
              </TableCell>
              <TableCell className='one-pgbr' align="center">{row.climate}</TableCell>
              <TableCell className='one-pgbr' align="center">{arrangeDigits(row.residents.length)}</TableCell>
              <TableCell className='one-pgbr' align="center">{row.terrain}</TableCell>
              <TableCell className='one-pgbr' align="center">{arrangeDigits(row.population)}</TableCell>
              <TableCell className='one-pgbr' align="center">{arrangeDigits(getWaterSurfaceArea(row.diameter, row.surface_water))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;