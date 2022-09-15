import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  onSubmit(formsValues) {
    console.log(formsValues);
  }

  renderInput = (label, input, meta, type) => {
    const className = `filed ${meta.errors && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" placeholder={label} type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ errors, touched }) {
    if (touched && errors) {
      return <div>{errors}</div>;
    }
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="Title"
          component="input"
          // component={this.renderInput}
          type="text"
          placeholder="Title"
          label="Enter label"
        />

        <Field
          name="description"
          component="input"
          // component={this.renderInput}
          type="text"
          placeholder="StreamCreate"
        />

        {/* {error && <strong>{error}</strong>} */}
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <br></br>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

const validate = (formsValues) => {
  const errors = {};
  if (!formsValues.title) {
    errors.title = "invalied text";
  }
  if (!formsValues.description) {
    errors.description = "invalied text";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate", // a unique identifier for this form
  validate,
})(StreamCreate);
