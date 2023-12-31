export const transformCreditsData = ({ cast }) => {
  return cast.map(({ id, profile_path, name, character, gender }) => ({
    profile_path,
    name,
    character,
    gender,
    id,
  }));
};
