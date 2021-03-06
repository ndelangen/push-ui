import React from 'react';
import { bool, object, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, TextMask } from '../../index';

const _FormTextMask = ({
  disabled,
  fieldProps,
  id,
  input,
  label,
  meta,
  placeholder,
  ...rest
}) => {
  const _id = id || input.name;
  return (
    <FormField
      {...fieldProps}
      isEmpty={!input.value}
      label={label}
      meta={meta}
      name={_id}
    >
      <TextMask
        {...rest}
        active={meta.active}
        disabled={disabled}
        id={id}
        invalid={meta.touched && meta.invalid}
        onBlur={(event) => input.onBlur(event)}
        onChange={(event, value) => input.onChange(value)}
        onFocus={(event, value) => input.onFocus(value)}
        name={input.name}
        placeholder={placeholder}
        value={input.value}
        valid={!!input.value && !meta.error && !meta.warning && meta.valid}
      />
    </FormField>
  );
};

_FormTextMask.propTypes = {
  disabled: bool,
  fieldProps: object,
  id: string,
  input: object.isRequired,
  inputProps: object,
  label: string,
  meta: object.isRequired,
  placeholder: string,
};

_FormTextMask.defaultProps = {
  disabled: false,
  fieldProps: null,
  id: '',
  inputProps: null,
  label: '',
  placeholder: '',
};

const FormTextMask = props => <Field {...props} component={_FormTextMask} type="text" />; // eslint-disable-line
export default FormTextMask;
