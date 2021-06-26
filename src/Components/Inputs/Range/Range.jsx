import {
  container,
  input,
  label,
  output,
  outputs,
  rail,
  slider,
  thumb,
  track,
} from './Range.module.scss';

export default function Range() {
  return (
    <div className={container}>
      <div className={slider}>
        <span className={rail} />
        <span className={track} />
        <span className={thumb} />
        <span className={thumb} />
      </div>
      <div className={outputs}>
        <div className={output}>
          <label htmlFor="min" className={label}>
            minimum
            <input name="min" className={input} placeholder="1000" />
          </label>
        </div>
        <div className={output}>
          <label htmlFor="max" className={label}>
            maximum
            <input name="max" className={input} placeholder="5000" />
          </label>
        </div>
      </div>
    </div>
  );
}

Range.propTypes = {};
