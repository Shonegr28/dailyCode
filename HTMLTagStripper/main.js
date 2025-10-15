function stripTags(html) {
    // Remove anything that looks like an HTML tag: <...>
    return html.replace(/<[^>]*>/g, "");
  }