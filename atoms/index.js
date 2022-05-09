import { atom } from 'recoil';

export const SubjectsState = atom({
  key: 'subjects',
  default: null,
});

export const SelectedSubjectState = atom({
  key: 'selectedSubject',
  default: '',
});
