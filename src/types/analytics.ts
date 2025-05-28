export enum EventType {
  BUTTON_CLICK = 'button_click',
  LINK_CLICK = 'link_click',
  FORM_SUBMIT = 'form_submit',
  CONTACT_FORM_SUBMIT = 'contact_form_submit',
  SUGGEST_FORM_SUBMIT = 'suggest_form_submit',
  SEARCH = 'search',
  FILTER = 'filter',
  VIEW_CHANGE = 'view_change',
  TOOL_SAVE = 'tool_save',
  TOOL_UNSAVE = 'tool_unsave',
  TOOL_SHARE = 'tool_share',
  EXTERNAL_LINK = 'external_link'
}

export type ShareMethod = 'web_share_api' | 'clipboard_copy' | 'share_button';

export interface ShareEventParams extends Record<string, any> {
  method: ShareMethod;
  source: string;
  success?: boolean;
} 