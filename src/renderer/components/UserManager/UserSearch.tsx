/* eslint-disable no-use-before-define */
import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/';
import getUsers from 'renderer/data/Users';

const filter = createFilterOptions<CountryType>();

type Props = {
  callback: any;
  className: any;
  defaultValue: any;
};

export default function CountriesController(props: Props) {
  const { callback, className, defaultValue } = props;
  const { loading, noData, countries } = getUsers();
  const [value, setValue] = React.useState<CountryType | null>(defaultValue);

  if (noData) {
    return <></>;
  }
  return (
    <div className={className}>
      {' '}
      {loading ? (
        'Loading countries...'
      ) : (
        <>
          <Autocomplete
            value={value}
            onChange={(_: any, newValue: { inputValue: any }) => {
              if (typeof newValue === 'string') {
                // timeout to avoid instant validation of the dialog's form.
                setTimeout(() => {});
              } else if (newValue && newValue.inputValue) {
                setValue(newValue);
                callback(newValue);
              } else {
                setValue(newValue);
                if (newValue) callback(newValue);
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params) as CountryType[];

              return filtered;
            }}
            id="country"
            options={countries}
            getOptionLabel={(option: { inputValue: string; name: string }) => {
              // e.g value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.name;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(option: { name: string }) => option.name}
            style={{ width: 300 }}
            freeSolo
            renderInput={(params: any) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TextField {...params} label="Country *" variant="outlined" />
            )}
          />
        </>
      )}{' '}
    </div>
  );
}

interface UserType {
  name?: string;
  email: string;
  status: string;
  profile: string;
}
