import { useState } from 'react';
import Select from 'react-select';
const options = [
  {
    label: 'Subsidiary',
    options: [
      { label: 'EDB', value: 4 },
      { label: 'Call Center', value: 5 },
      { label: 'sub - title1', value: 11 },
      { label: 'fdsd', value: 12 },
      { label: 'dsfdsf', value: 15 },
      { label: 'sss', value: 17 },
      { label: 'Division', value: 18 },
      { label: 'Sandeep', value: 19 },
    ],
  },
  {
    label: 'Division',
    options: [
      { label: 'Food', value: 3 },
      { label: 'ABC 11', value: 9 },
      { label: 'asdasd', value: 13 },
    ],
  },
];

const App = () => {
  const data = {
    unitTypeList: [
      {
        auditTypeId: 3,
        auditTypeName: 'Food',
        auditType: 'Division',
      },
    ],
  };
  const unitTypeList = data.unitTypeList.map((item) => ({
    label: item.auditTypeName,
    value: item.auditTypeId,
  }));
  const [selectedOptions, setSelectedOptions] = useState(...unitTypeList);
  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  return (
    <Select
      options={options}
      groupBy={(option) => option.unitType}
      formatGroupLabel={(group) => <strong>{group.label}</strong>}
      value={selectedOptions}
      onChange={(selected) => handleChange(selected)}
      isMulti
      isClearable
    />
  );
};
export default App;
