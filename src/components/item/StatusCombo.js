import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



export const StatusCombo = (state) => {

    const handleChange = (event) => {
        
      };

    return (
        <FormControl>
        <InputLabel> State</InputLabel>
        <Select
          native
          value={state}
          onChange={handleChange}
          label="State"
          inputProps={{
            name: 'state',
            //id: 'outlined-age-native-simple',
          }}
        >
          <option value={0}>AVAILABLE</option>
          <option value={1}>DISCONTINUED</option>
        </Select>
      </FormControl>
    );

}
