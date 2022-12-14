import { Content } from './Content';

test('it shold be able to crate a notification content', () => {
  const content = new Content('Você recebeu uma notificação, parabéns!');

  expect(content).toBeTruthy();
});

test('it shold not be able to crate a notification content with less than 3 characters', () => {
  expect(() => new Content('ok')).toThrow();
});

test('it shold not be able to crate a notification content with more than 240 characters', () => {
  expect(() => new Content('g'.repeat(241))).toThrow();
});
