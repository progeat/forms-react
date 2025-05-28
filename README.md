# Реализация формы входа и регистрации

Реализация форм входа и регистрации. Реализация собственного компонета input

---

## Реализовать два компонента: Signin и Signup и собственный компонент input

### Суть задачи

Необходимо реализовать компоненты: Signin и Signup и собственный компонент input

В компоненте <Signin /> необходимо сделать форму, в которой есть `<input type="email">`, `<input type="password">` и кнопка “Войти”.

Также компонент в props принимает функцию onSubmit(), в ее аргументы необходимо передать значения полей после отправки формы.

Тоже самое нужно сделать для компонента <Signup />, но полей будет больше:

- Имя
- Ник
- Почта
- Пол (с помощью `<input type="radio">`)
- Пароль
- Повторить пароль

В формах используйте собственный компонент для `<input>`, который можно будет настраивать с помощью props. Пример такого поля ввода: https://mantine.dev/core/text-input/ (Необходимо реализовать все настройки)

Поле «Ник» должно начинаться с символа «@», но вместо «@» должно быть возможно использовать любую иконку, переданную через prop icon. Placeholder задаётся непосредственно для input-элемента

1. Делает запрос по переданной url ссылке для получения данных

### Решение:

```typescript
import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from './text-input.module.css';
import cn from 'classnames';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'number'
    | 'radio';
  label?: string;
  description?: string;
  // value?: string;
  checked?: boolean;
  error?: string | null;
  required?: boolean;
  icon?: ReactNode;
  size?: Size;
  radius?: Size;
}

export const TextInput = (props: TextInputProps) => {
  const {
    type,
    label,
    description,
    error,
    required,
    icon,
    size = 'md',
    radius = 'xs',
    ...rest
  } = props;

  return (
    <div className={styles.textInput}>
      {label && (
        <label className={cn(styles.label, styles[size])}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {description && (
        <p className={cn(styles.description, styles[`font-small-${size}`])}>
          {description}
        </p>
      )}
      <div className={styles.inputWrapper}>
        {icon && <div>{icon}</div>}
        <input
          className={cn(styles.input, styles[size], {
            [styles.error]: error,
            [styles[`radius-${radius}`]]: radius,
          })}
          type={type ?? 'text'}
          required={required}
          {...rest}
        />
        {error && (
          <p className={cn(styles.errorMessage, styles[`font-small-${size}`])}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
```

---
