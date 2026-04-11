import POST_registration_Organizer from './forms/POST/registration/Organizer.json' with { type: 'json' }
import POST_registration_Admin from './forms/POST/registration/Admin.json' with { type: 'json' }
import POST_city_Organizer from './forms/POST/city/Organizer.json' with { type: 'json' }
import POST_city_Admin from './forms/POST/city/Admin.json' with { type: 'json' }
import POST_city_vk_group_token_Organizer from './forms/POST/city/vk_group_token/Organizer.json' with { type: 'json' }
import POST_city_vk_group_token_Admin from './forms/POST/city/vk_group_token/Admin.json' with { type: 'json' }
import POST_user_password_Admin from './forms/POST/user/password/Admin.json' with { type: 'json' }
import POST_user_role_Admin from './forms/POST/user/role/Admin.json' with { type: 'json' }
import POST_user_city_Admin from './forms/POST/user/city/Admin.json' with { type: 'json' }
import POST_user_Admin from './forms/POST/user/Admin.json' with { type: 'json' }
import POST_game_Organizer from './forms/POST/game/Organizer.json' with { type: 'json' }
import POST_game_Admin from './forms/POST/game/Admin.json' with { type: 'json' }
import POST_theme_Organizer from './forms/POST/theme/Organizer.json' with { type: 'json' }
import POST_theme_Admin from './forms/POST/theme/Admin.json' with { type: 'json' }
import POST_theme_cover_Organizer from './forms/POST/theme/cover/Organizer.json' with { type: 'json' }
import POST_theme_cover_Admin from './forms/POST/theme/cover/Admin.json' with { type: 'json' }
import POST_venue_Organizer from './forms/POST/venue/Organizer.json' with { type: 'json' }
import POST_venue_Admin from './forms/POST/venue/Admin.json' with { type: 'json' }
import POST_checkin_Organizer from './forms/POST/checkin/Organizer.json' with { type: 'json' }
import POST_checkin_Unknown from './forms/POST/checkin/Unknown.json' with { type: 'json' }
import POST_checkin_Admin from './forms/POST/checkin/Admin.json' with { type: 'json' }
import POST_registrations_export_Organizer from './forms/POST/registrations/export/Organizer.json' with { type: 'json' }
import POST_registrations_export_Admin from './forms/POST/registrations/export/Admin.json' with { type: 'json' }
import PUT_theme_cover_Organizer from './forms/PUT/theme/cover/Organizer.json' with { type: 'json' }
import PUT_theme_cover_Admin from './forms/PUT/theme/cover/Admin.json' with { type: 'json' }
import PATCH_registration_Organizer from './forms/PATCH/registration/Organizer.json' with { type: 'json' }
import PATCH_registration_Admin from './forms/PATCH/registration/Admin.json' with { type: 'json' }
import PATCH_city_timezone_Organizer from './forms/PATCH/city/timezone/Organizer.json' with { type: 'json' }
import PATCH_city_timezone_Admin from './forms/PATCH/city/timezone/Admin.json' with { type: 'json' }
import PATCH_city_Organizer from './forms/PATCH/city/Organizer.json' with { type: 'json' }
import PATCH_city_Admin from './forms/PATCH/city/Admin.json' with { type: 'json' }
import PATCH_city_vk_group_token_Organizer from './forms/PATCH/city/vk_group_token/Organizer.json' with { type: 'json' }
import PATCH_city_vk_group_token_Admin from './forms/PATCH/city/vk_group_token/Admin.json' with { type: 'json' }
import PATCH_city_currency_Organizer from './forms/PATCH/city/currency/Organizer.json' with { type: 'json' }
import PATCH_city_currency_Admin from './forms/PATCH/city/currency/Admin.json' with { type: 'json' }
import PATCH_city_country_Organizer from './forms/PATCH/city/country/Organizer.json' with { type: 'json' }
import PATCH_city_country_Admin from './forms/PATCH/city/country/Admin.json' with { type: 'json' }
import PATCH_user_password_Admin from './forms/PATCH/user/password/Admin.json' with { type: 'json' }
import PATCH_user_role_Admin from './forms/PATCH/user/role/Admin.json' with { type: 'json' }
import PATCH_user_Admin from './forms/PATCH/user/Admin.json' with { type: 'json' }
import PATCH_game_Organizer from './forms/PATCH/game/Organizer.json' with { type: 'json' }
import PATCH_game_theme_Organizer from './forms/PATCH/game/theme/Organizer.json' with { type: 'json' }
import PATCH_game_theme_Admin from './forms/PATCH/game/theme/Admin.json' with { type: 'json' }
import PATCH_game_venue_Organizer from './forms/PATCH/game/venue/Organizer.json' with { type: 'json' }
import PATCH_game_venue_Admin from './forms/PATCH/game/venue/Admin.json' with { type: 'json' }
import PATCH_game_Admin from './forms/PATCH/game/Admin.json' with { type: 'json' }
import PATCH_theme_Organizer from './forms/PATCH/theme/Organizer.json' with { type: 'json' }
import PATCH_theme_Admin from './forms/PATCH/theme/Admin.json' with { type: 'json' }
import PATCH_venue_Organizer from './forms/PATCH/venue/Organizer.json' with { type: 'json' }
import PATCH_venue_Admin from './forms/PATCH/venue/Admin.json' with { type: 'json' }

export const FormSchema = Object.freeze(
  /** @type {const} */ ({
    'POST/registration/Organizer': POST_registration_Organizer,
    'POST/registration/Admin': POST_registration_Admin,
    'POST/city/Organizer': POST_city_Organizer,
    'POST/city/Admin': POST_city_Admin,
    'POST/city/vk_group_token/Organizer': POST_city_vk_group_token_Organizer,
    'POST/city/vk_group_token/Admin': POST_city_vk_group_token_Admin,
    'POST/user/password/Admin': POST_user_password_Admin,
    'POST/user/role/Admin': POST_user_role_Admin,
    'POST/user/city/Admin': POST_user_city_Admin,
    'POST/user/Admin': POST_user_Admin,
    'POST/game/Organizer': POST_game_Organizer,
    'POST/game/Admin': POST_game_Admin,
    'POST/theme/Organizer': POST_theme_Organizer,
    'POST/theme/Admin': POST_theme_Admin,
    'POST/theme/cover/Organizer': POST_theme_cover_Organizer,
    'POST/theme/cover/Admin': POST_theme_cover_Admin,
    'POST/venue/Organizer': POST_venue_Organizer,
    'POST/venue/Admin': POST_venue_Admin,
    'POST/checkin/Organizer': POST_checkin_Organizer,
    'POST/checkin/Unknown': POST_checkin_Unknown,
    'POST/checkin/Admin': POST_checkin_Admin,
    'POST/registrations/export/Organizer': POST_registrations_export_Organizer,
    'POST/registrations/export/Admin': POST_registrations_export_Admin,
    'PUT/theme/cover/Organizer': PUT_theme_cover_Organizer,
    'PUT/theme/cover/Admin': PUT_theme_cover_Admin,
    'PATCH/registration/Organizer': PATCH_registration_Organizer,
    'PATCH/registration/Admin': PATCH_registration_Admin,
    'PATCH/city/timezone/Organizer': PATCH_city_timezone_Organizer,
    'PATCH/city/timezone/Admin': PATCH_city_timezone_Admin,
    'PATCH/city/Organizer': PATCH_city_Organizer,
    'PATCH/city/Admin': PATCH_city_Admin,
    'PATCH/city/vk_group_token/Organizer': PATCH_city_vk_group_token_Organizer,
    'PATCH/city/vk_group_token/Admin': PATCH_city_vk_group_token_Admin,
    'PATCH/city/currency/Organizer': PATCH_city_currency_Organizer,
    'PATCH/city/currency/Admin': PATCH_city_currency_Admin,
    'PATCH/city/country/Organizer': PATCH_city_country_Organizer,
    'PATCH/city/country/Admin': PATCH_city_country_Admin,
    'PATCH/user/password/Admin': PATCH_user_password_Admin,
    'PATCH/user/role/Admin': PATCH_user_role_Admin,
    'PATCH/user/Admin': PATCH_user_Admin,
    'PATCH/game/Organizer': PATCH_game_Organizer,
    'PATCH/game/theme/Organizer': PATCH_game_theme_Organizer,
    'PATCH/game/theme/Admin': PATCH_game_theme_Admin,
    'PATCH/game/venue/Organizer': PATCH_game_venue_Organizer,
    'PATCH/game/venue/Admin': PATCH_game_venue_Admin,
    'PATCH/game/Admin': PATCH_game_Admin,
    'PATCH/theme/Organizer': PATCH_theme_Organizer,
    'PATCH/theme/Admin': PATCH_theme_Admin,
    'PATCH/venue/Organizer': PATCH_venue_Organizer,
    'PATCH/venue/Admin': PATCH_venue_Admin
  }),
)

export const FormKind = Object.freeze(
  /** @type {const} */ ({
    'POST/registration/Organizer': 'Unknown',
    'POST/registration/Admin': 'Unknown',
    'POST/city/Organizer': 'Unknown',
    'POST/city/Admin': 'Unknown',
    'POST/city/vk_group_token/Organizer': 'Unknown',
    'POST/city/vk_group_token/Admin': 'Unknown',
    'POST/user/password/Admin': 'Unknown',
    'POST/user/role/Admin': 'Unknown',
    'POST/user/city/Admin': 'Unknown',
    'POST/user/Admin': 'Unknown',
    'POST/game/Organizer': 'Unknown',
    'POST/game/Admin': 'Unknown',
    'POST/theme/Organizer': 'Unknown',
    'POST/theme/Admin': 'Unknown',
    'POST/theme/cover/Organizer': 'Unknown',
    'POST/theme/cover/Admin': 'Unknown',
    'POST/venue/Organizer': 'Unknown',
    'POST/venue/Admin': 'Unknown',
    'POST/checkin/Organizer': 'Unknown',
    'POST/checkin/Unknown': 'Schema',
    'POST/checkin/Admin': 'Unknown',
    'POST/registrations/export/Organizer': 'Unknown',
    'POST/registrations/export/Admin': 'Unknown',
    'PUT/theme/cover/Organizer': 'Unknown',
    'PUT/theme/cover/Admin': 'Unknown',
    'PATCH/registration/Organizer': 'Unknown',
    'PATCH/registration/Admin': 'Unknown',
    'PATCH/city/timezone/Organizer': 'Unknown',
    'PATCH/city/timezone/Admin': 'Unknown',
    'PATCH/city/Organizer': 'Unknown',
    'PATCH/city/Admin': 'Unknown',
    'PATCH/city/vk_group_token/Organizer': 'Unknown',
    'PATCH/city/vk_group_token/Admin': 'Unknown',
    'PATCH/city/currency/Organizer': 'Unknown',
    'PATCH/city/currency/Admin': 'Unknown',
    'PATCH/city/country/Organizer': 'Unknown',
    'PATCH/city/country/Admin': 'Unknown',
    'PATCH/user/password/Admin': 'Unknown',
    'PATCH/user/role/Admin': 'Unknown',
    'PATCH/user/Admin': 'Unknown',
    'PATCH/game/Organizer': 'Unknown',
    'PATCH/game/theme/Organizer': 'Unknown',
    'PATCH/game/theme/Admin': 'Unknown',
    'PATCH/game/venue/Organizer': 'Unknown',
    'PATCH/game/venue/Admin': 'Unknown',
    'PATCH/game/Admin': 'Unknown',
    'PATCH/theme/Organizer': 'Unknown',
    'PATCH/theme/Admin': 'Unknown',
    'PATCH/venue/Organizer': 'Unknown',
    'PATCH/venue/Admin': 'Unknown'
  }),
)
