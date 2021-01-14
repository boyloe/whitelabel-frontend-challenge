export const formatClassNames = (...classes:(false | null | undefined | string)[]):string => (
    classes.filter(Boolean).join(' ')
)