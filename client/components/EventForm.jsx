import dayjs from 'dayjs';
import DateSelect from './DateSelect';
import AddressForm from './AddressForm';
import UsersSelect from './UsersSelect';


const EventForm = ({ event, setEventValue, users }) => {
  if (!event) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <form noValidate autoComplete="off">
          <label htmlFor="eventName" style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Event Name:
            <br />
            <input
              type="text"
              id="eventName"
              name="link"
              value={event ? event.title : ''}
              onChange={(event) => setEventValue('title', event.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                marginTop: '5px'
              }}
            />
          </label>
        </form>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DateSelect date={event ? dayjs(event.start) : dayjs(new Date())} label="Start" setDate={(date) => setEventValue('start', date)} />
        <DateSelect date={event ? dayjs(event.end) : dayjs(new Date())} label="End" setDate={(date) => setEventValue('end', date)} />
      </div>
      <br />
      <AddressForm event={event} setEventValue={setEventValue} />
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <UsersSelect
          users={users || []}
          label="Invites"
          selectedUsers={event.selectedUsers || []}
          setSelectedUsers={(selectedUsers) => setEventValue('selectedUsers', selectedUsers)}
        />
      </div>
    </>


  // MUI VERSION
  // <>
  //   <Container sx={{ marginBottom: '20px' }}>
  //     <Box component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
  //       <TextField
  //         name="link"
  //         label="Event Name"
  //         value={event ? event.title : ''}
  //         onChange={({ target: { value } }) => setEventValue('title', value)}
  //         sx={{ width: '100%' }}
  //       />
  //     </Box>
  //   </Container>
  //   <Container>
  //     <DateSelect date={event ? dayjs(event.start) : dayjs()} label="Start" setSelectedDate={(date) => setEventValue('start', date)} />
  //     <DateSelect date={event ? dayjs(event.end) : dayjs()} label="End" setSelectedDate={(date) => setEventValue('end', date)} />
  //   </Container>
  //   <AddressForm address={event ? event.address : ''} setAddress={(address) => setEventValue('address', address)} sx={{ width: '90%' }} />
  //   <Container sx={{ marginTop: '20px', marginBottom: '20px' }}>
  //     <UsersSelect
  //       users={users || []}
  //       label="Invites"
  //       selectedUsers={event.selectedUsers || []}
  //       setSelectedUsers={(selectedUsers) => setEventValue('selectedUsers', selectedUsers)}
  //     />
  //   </Container>
  // </>
  );
};

export default EventForm;
