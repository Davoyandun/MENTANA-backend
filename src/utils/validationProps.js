const validateProperties = (obj, validateArray) => {
  const objKeys = Object.keys(obj);
  const invalidKeys = objKeys.filter(key => !validateArray.includes(key));

  if (invalidKeys.length > 0) {
    throw new Error(`Invalid properties: ${invalidKeys.join(", ")}`);
  }
};

module.exports = validateProperties;