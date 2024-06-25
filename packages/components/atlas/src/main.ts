import { DefineComponent, PropType, computed, defineComponent, h, warn } from 'vue';

import Atlas404 from '../svg/404.vue';
import Atlas500 from '../svg/500.vue';
import AtlasNoData from '../svg/no-data.vue';
import AtlasNoRecord from '../svg/no-record.vue';
import AtlasNoPremiss from '../svg/no-premiss.vue';
import AtlasNoCollect from '../svg/no-collect.vue';
import AtlasNoSearch from '../svg/no-search.vue';
import AtlasNoMessage from '../svg/no-message.vue';
import AtlasNoAddress from '../svg/no-address.vue';
import AtlasNoEval from '../svg/no-eval.vue';
import AtlasNoWeb from '../svg/no-web.vue';
import AtlasPageError from '../svg/page-error.vue';

export default defineComponent({
  name: 'CuAtlas',
  components: {
    Atlas404,
    Atlas500,
    AtlasNoData,
    AtlasNoRecord,
    AtlasNoPremiss,
    AtlasNoCollect,
    AtlasNoSearch,
    AtlasNoMessage,
    AtlasNoWeb,
    AtlasNoAddress,
    AtlasNoEval,
    AtlasPageError
  },
  props: {
    svg: String,
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 200
    }
  },
  setup(props, { slots }) {
    const atlasEnum = {
      404: Atlas404,
      500: Atlas500,
      ['no-data']: AtlasNoData,
      ['no-record']: AtlasNoRecord,
      ['no-premiss']: AtlasNoPremiss,
      ['no-collect']: AtlasNoCollect,
      ['no-search']: AtlasNoSearch,
      ['no-message']: AtlasNoMessage,
      ['no-web']: AtlasNoWeb,
      ['no-address']: AtlasNoAddress,
      ['no-eval']: AtlasNoEval,
      ['page-error']: AtlasPageError
    };

    const componentName = computed<DefineComponent>(() => {
      return atlasEnum[props.svg];
    });

    return () => {
      if (!componentName.value) {
        warn('The svg attributes field passed in is illegal');
      }
      return h(componentName.value, { size: props.size }, slots);
    };
  }
});
