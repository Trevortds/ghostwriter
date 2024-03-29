
import { ComposerDocument, DocumentType } from 'common/dist/types/ComposerDocument';

export const fictionBookTemplate: ComposerDocument = {
  id: 'fiction-book-template',
  metaData: [
    { id: '1', title: 'Plot Summary', label: 'Summary',
      content: '', icon: 'font_download',
      allowsChildren: false,
      instructions: 'Provide a summary of the plot for your story' },
    { id: '2', title: 'Setting and Timeline', label: 'Setting',
    content: '', icon: 'warning',
    allowsChildren: false,
    instructions: 'What is the setting, era, and timeline of your story.  Describe it here.' },
   { id: '3', title: 'Characters', label: 'Characters',
    content: '', icon: 'today',
    allowsChildren: true,
    instructions: 'Add your characters here' },
    { id: '4', title: 'Writing Style', label: 'Style',
    content: '', icon: 'print',
    allowsChildren: false,
    instructions: 'Describe the writing style you would like to use.  Like one of your favor authors or a genre.' },
    { id: '5', title: 'Length of Book', label: 'Length',
    content: '', icon: 'style',
    allowsChildren: false,
    instructions: 'How long do you want this story to be in pages, chapters or sentences.' },
  ],
  docOutline: [
    {
      id: 'chapter1',
      label: 'Chapter 1',
      title: 'Chapter 1',
      content: '',

      type: 'textarea',
      allowsChildren: true,
    },
  ],
  title: '',
  author: '',
  documentType: DocumentType.Fiction
};

/*
const sections = ref<Section[]>([
  { id: '1', title: 'Plot Summary', label: 'Summary', content: 'Test 1', allowsChildren: false },
  { id: '2', title: 'Setting and Timeline', label: 'Setting', content: 'content of content', allowsChildren: false },
  { id: '3', title: 'Characters', label: 'Characters', content: 'More', allowsChildren: true },
  { id: '4', title: 'Writing Style', label: 'Style', content: '', allowsChildren: false },
  { id: '5', title: 'Length of Book', label: 'Length', content: 'not', allowsChildren: false }
])
*/
