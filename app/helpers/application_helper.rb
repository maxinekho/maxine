module ApplicationHelper
end

def title(page_title, options={})
  content_for(:title, page_title.to_s)
  return content_tag(:h1, page_title, options)
end
