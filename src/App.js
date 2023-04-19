import { useState } from 'react';
import Select from 'react-select';
import { SELECTED_DATA, SELECT_DATA } from './shared/data';
import { Formik, Form } from 'formik';
const options = [];

SELECT_DATA.forEach((item) => {
  const group = {
    label: item.unitType,
    options: item.unitTypeTitle.map((subItem) => {
      return {
        label: subItem.name,
        value: subItem.id,
      };
    }),
  };
  options.push(group);
});

const unitTypeList = SELECTED_DATA.unitTypeList.map((item) => ({
  label: item.auditTypeName,
  value: item.auditTypeId,
}));

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState(unitTypeList); 

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const initialValues = { division_select: unitTypeList.map((el) => el.value) };

  const handleContinue = (values) => {
    console.log({ values });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleContinue}>
      {({ values, errors, touched, isValid, isSubmitting, setFieldValue }) => {
        return (
          <Form>
            {console.log(values)}
            <Select
              name='division_select'
              options={options}
              groupBy={(option) => option.unitType}
              formatGroupLabel={(group) => <strong>{group.label}</strong>}
              value={selectedOptions}
              onChange={(selected) => handleChange(selected)}
              isMulti
              isClearable
            />
            <Select
              name='any_select'
              options={options}
              groupBy={(option) => option.unitType}
              formatGroupLabel={(group) => <strong>{group.label}</strong>}
              value={
                values.division_select.includes(3)
                  ? [
                      {
                        value: 12,
                        label: 'fdsdeeepakkkk',
                      },
                    ]
                  : []
              }
              onChange={(selected) => handleChange(selected)}
              isMulti
              isClearable
            />
            <button type='submit' onSubmit={(e) => handleContinue(e)}>
              Continue
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default App;
