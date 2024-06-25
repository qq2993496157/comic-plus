const imageProps = {
  src: String,
  alt: String,
  fit: String,
  current: Number,
  loading: {
    type: String,
    default: "eager"
  },
  previewList: Array
};
const imageEmits = {
  load: () => true,
  error: () => true
};
export {
  imageEmits,
  imageProps
};
