export const transformCreditsData = ({ cast }) => {
  return cast.map(({ profile_path, name, character, gender }) => ({
    profile_path,
    name,
    character,
    gender,
  }));
};
