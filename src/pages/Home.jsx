import { BaseContainer } from './Base.styled';
import { DataTable } from '../components/DataTable';

export default function Home() {
  return (
    <BaseContainer component="main" sx={{ paddingTop: 8, display: 'flex' }}>
      <DataTable />
    </BaseContainer>
  );
}
