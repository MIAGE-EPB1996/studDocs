import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Author from '@site/src/components/Author';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Author>" tag to our Author component
  // `Author` will receive all props that were passed to `<Author>` in MDX
  Author,
};