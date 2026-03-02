import POST_theme_cover_Admin from './forms/POST/theme/cover/Admin.json' with { type: 'json' }
import POST_theme_Admin from './forms/POST/theme/Admin.json' with { type: 'json' }
import POST_checkin_Unknown from './forms/POST/checkin/Unknown.json' with { type: 'json' }
import POST_checkin_Admin from './forms/POST/checkin/Admin.json' with { type: 'json' }
import POST_checkin_Organizer from './forms/POST/checkin/Organizer.json' with { type: 'json' }
import POST_user_role_Admin from './forms/POST/user/role/Admin.json' with { type: 'json' }
import POST_user_city_Admin from './forms/POST/user/city/Admin.json' with { type: 'json' }
import POST_user_password_Admin from './forms/POST/user/password/Admin.json' with { type: 'json' }
import POST_user_Admin from './forms/POST/user/Admin.json' with { type: 'json' }
import POST_game_Admin from './forms/POST/game/Admin.json' with { type: 'json' }
import POST_game_Organizer from './forms/POST/game/Organizer.json' with { type: 'json' }
import POST_city_vk_group_token_Admin from './forms/POST/city/vk_group_token/Admin.json' with { type: 'json' }
import POST_city_Admin from './forms/POST/city/Admin.json' with { type: 'json' }
import POST_venue_Admin from './forms/POST/venue/Admin.json' with { type: 'json' }
import POST_venue_Organizer from './forms/POST/venue/Organizer.json' with { type: 'json' }
import POST_registration_Unknown from './forms/POST/registration/Unknown.json' with { type: 'json' }
import POST_registration_Admin from './forms/POST/registration/Admin.json' with { type: 'json' }
import POST_registration_Organizer from './forms/POST/registration/Organizer.json' with { type: 'json' }
import PATCH_theme_Admin from './forms/PATCH/theme/Admin.json' with { type: 'json' }
import PATCH_theme_Organizer from './forms/PATCH/theme/Organizer.json' with { type: 'json' }
import PATCH_user_role_Admin from './forms/PATCH/user/role/Admin.json' with { type: 'json' }
import PATCH_user_password_Admin from './forms/PATCH/user/password/Admin.json' with { type: 'json' }
import PATCH_user_Admin from './forms/PATCH/user/Admin.json' with { type: 'json' }
import PATCH_game_Admin from './forms/PATCH/game/Admin.json' with { type: 'json' }
import PATCH_game_Organizer from './forms/PATCH/game/Organizer.json' with { type: 'json' }
import PATCH_city_timezone_Admin from './forms/PATCH/city/timezone/Admin.json' with { type: 'json' }
import PATCH_city_timezone_Organizer from './forms/PATCH/city/timezone/Organizer.json' with { type: 'json' }
import PATCH_city_currency_Admin from './forms/PATCH/city/currency/Admin.json' with { type: 'json' }
import PATCH_city_currency_Organizer from './forms/PATCH/city/currency/Organizer.json' with { type: 'json' }
import PATCH_city_country_Admin from './forms/PATCH/city/country/Admin.json' with { type: 'json' }
import PATCH_city_country_Organizer from './forms/PATCH/city/country/Organizer.json' with { type: 'json' }
import PATCH_city_vk_group_token_Admin from './forms/PATCH/city/vk_group_token/Admin.json' with { type: 'json' }
import PATCH_city_vk_group_token_Organizer from './forms/PATCH/city/vk_group_token/Organizer.json' with { type: 'json' }
import PATCH_city_Admin from './forms/PATCH/city/Admin.json' with { type: 'json' }
import PATCH_city_Organizer from './forms/PATCH/city/Organizer.json' with { type: 'json' }
import PATCH_venue_Admin from './forms/PATCH/venue/Admin.json' with { type: 'json' }
import PATCH_venue_Organizer from './forms/PATCH/venue/Organizer.json' with { type: 'json' }
import PATCH_registration_channel_Admin from './forms/PATCH/registration/channel/Admin.json' with { type: 'json' }
import PATCH_registration_attributes_Admin from './forms/PATCH/registration/attributes/Admin.json' with { type: 'json' }
import PATCH_registration_status_Admin from './forms/PATCH/registration/status/Admin.json' with { type: 'json' }
import PATCH_registration_lineup_Admin from './forms/PATCH/registration/lineup/Admin.json' with { type: 'json' }
import PATCH_registration_Admin from './forms/PATCH/registration/Admin.json' with { type: 'json' }
import PATCH_registration_Organizer from './forms/PATCH/registration/Organizer.json' with { type: 'json' }
import PUT_theme_cover_Admin from './forms/PUT/theme/cover/Admin.json' with { type: 'json' }
import PUT_theme_cover_Organizer from './forms/PUT/theme/cover/Organizer.json' with { type: 'json' }

export const FormSchema = Object.freeze(
  /** @type {const} */ ({
    'POST/theme/cover/Admin': POST_theme_cover_Admin,
    'POST/theme/Admin': POST_theme_Admin,
    'POST/checkin/Unknown': POST_checkin_Unknown,
    'POST/checkin/Admin': POST_checkin_Admin,
    'POST/checkin/Organizer': POST_checkin_Organizer,
    'POST/user/role/Admin': POST_user_role_Admin,
    'POST/user/city/Admin': POST_user_city_Admin,
    'POST/user/password/Admin': POST_user_password_Admin,
    'POST/user/Admin': POST_user_Admin,
    'POST/game/Admin': POST_game_Admin,
    'POST/game/Organizer': POST_game_Organizer,
    'POST/city/vk_group_token/Admin': POST_city_vk_group_token_Admin,
    'POST/city/Admin': POST_city_Admin,
    'POST/venue/Admin': POST_venue_Admin,
    'POST/venue/Organizer': POST_venue_Organizer,
    'POST/registration/Unknown': POST_registration_Unknown,
    'POST/registration/Admin': POST_registration_Admin,
    'POST/registration/Organizer': POST_registration_Organizer,
    'PATCH/theme/Admin': PATCH_theme_Admin,
    'PATCH/theme/Organizer': PATCH_theme_Organizer,
    'PATCH/user/role/Admin': PATCH_user_role_Admin,
    'PATCH/user/password/Admin': PATCH_user_password_Admin,
    'PATCH/user/Admin': PATCH_user_Admin,
    'PATCH/game/Admin': PATCH_game_Admin,
    'PATCH/game/Organizer': PATCH_game_Organizer,
    'PATCH/city/timezone/Admin': PATCH_city_timezone_Admin,
    'PATCH/city/timezone/Organizer': PATCH_city_timezone_Organizer,
    'PATCH/city/currency/Admin': PATCH_city_currency_Admin,
    'PATCH/city/currency/Organizer': PATCH_city_currency_Organizer,
    'PATCH/city/country/Admin': PATCH_city_country_Admin,
    'PATCH/city/country/Organizer': PATCH_city_country_Organizer,
    'PATCH/city/vk_group_token/Admin': PATCH_city_vk_group_token_Admin,
    'PATCH/city/vk_group_token/Organizer': PATCH_city_vk_group_token_Organizer,
    'PATCH/city/Admin': PATCH_city_Admin,
    'PATCH/city/Organizer': PATCH_city_Organizer,
    'PATCH/venue/Admin': PATCH_venue_Admin,
    'PATCH/venue/Organizer': PATCH_venue_Organizer,
    'PATCH/registration/channel/Admin': PATCH_registration_channel_Admin,
    'PATCH/registration/attributes/Admin': PATCH_registration_attributes_Admin,
    'PATCH/registration/status/Admin': PATCH_registration_status_Admin,
    'PATCH/registration/lineup/Admin': PATCH_registration_lineup_Admin,
    'PATCH/registration/Admin': PATCH_registration_Admin,
    'PATCH/registration/Organizer': PATCH_registration_Organizer,
    'PUT/theme/cover/Admin': PUT_theme_cover_Admin,
    'PUT/theme/cover/Organizer': PUT_theme_cover_Organizer
  }),
)

export const FormKind = Object.freeze(
  /** @type {const} */ ({
    'POST/theme/cover/Admin': 'Schema',
    'POST/theme/Admin': 'Schema',
    'POST/checkin/Unknown': 'Schema',
    'POST/checkin/Admin': 'Schema',
    'POST/checkin/Organizer': 'Schema',
    'POST/user/role/Admin': 'Schema',
    'POST/user/city/Admin': 'Schema',
    'POST/user/password/Admin': 'Schema',
    'POST/user/Admin': 'Schema',
    'POST/game/Admin': 'Schema',
    'POST/game/Organizer': 'Schema',
    'POST/city/vk_group_token/Admin': 'Schema',
    'POST/city/Admin': 'Schema',
    'POST/venue/Admin': 'Schema',
    'POST/venue/Organizer': 'Schema',
    'POST/registration/Unknown': 'Schema',
    'POST/registration/Admin': 'Schema',
    'POST/registration/Organizer': 'Schema',
    'PATCH/theme/Admin': 'Schema',
    'PATCH/theme/Organizer': 'Unknown',
    'PATCH/user/role/Admin': 'Schema',
    'PATCH/user/password/Admin': 'Schema',
    'PATCH/user/Admin': 'Schema',
    'PATCH/game/Admin': 'Schema',
    'PATCH/game/Organizer': 'Schema',
    'PATCH/city/timezone/Admin': 'Schema',
    'PATCH/city/timezone/Organizer': 'Schema',
    'PATCH/city/currency/Admin': 'Schema',
    'PATCH/city/currency/Organizer': 'Schema',
    'PATCH/city/country/Admin': 'Schema',
    'PATCH/city/country/Organizer': 'Schema',
    'PATCH/city/vk_group_token/Admin': 'Schema',
    'PATCH/city/vk_group_token/Organizer': 'Schema',
    'PATCH/city/Admin': 'Schema',
    'PATCH/city/Organizer': 'Schema',
    'PATCH/venue/Admin': 'Schema',
    'PATCH/venue/Organizer': 'Schema',
    'PATCH/registration/channel/Admin': 'Schema',
    'PATCH/registration/attributes/Admin': 'Unknown',
    'PATCH/registration/status/Admin': 'Schema',
    'PATCH/registration/lineup/Admin': 'Schema',
    'PATCH/registration/Admin': 'Schema',
    'PATCH/registration/Organizer': 'Schema',
    'PUT/theme/cover/Admin': 'Schema',
    'PUT/theme/cover/Organizer': 'Schema'
  }),
)
