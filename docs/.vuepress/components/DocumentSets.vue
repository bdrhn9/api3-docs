<!--
This component places document sets in the header of the sidebar. 

NOTE: When this component is MOUNTED (as it is mounted from a landing page click
or an SPA load/reload),
it will always default to the startPath in config.json.
-->

<template>
  <div>
    <div
      style="padding-left: 12px; margin-top: -4px"
      v-show="isMounted && !hidePickList"
    >
      <!-- Current Route -->
      <div class="ds-list-line">
        <div
          class="ds-route-link"
          style="cursor: pointer"
          v-on:click="showDocSets = !(showDocSets != false)"
        >
          <img
            v-show="docSets[0].name !== 'ChainAPI'"
            :src="docSets[0].iconActive"
            class="ds-icon-shrink"
          />
          <!-- This is temp for ChainAPI. Remove the v-show in hte directive above
          when ChainAPI is removed. -->
          <img
            v-show="docSets[0].name === 'ChainAPI'"
            :src="docSets[0].iconActive"
            class="ds-icon-shrink-chainapi"
            style="
              width: 35px;
              height: 35px;
              margin-top: 10px;
              margin-bottom: 2px;
            "
          />
          <span
            class="ds-list-line-name"
            style="margin-top: 12px; color: black"
            >{{ docSets[0].name }}</span
          >
          <img
            :src="getArrowSrc()"
            v-bind:alt="getArrowSrc()"
            class="ds-route-link ds-arrow"
          />
        </div>
      </div>
      <!-- LOOP -->
      <ul id="doc-sets" v-if="showDocSets" style="border-top: 1px solid gray">
        <li
          class="ds-list-line"
          v-for="(item, index) in docSets"
          :key="item.name"
        >
          <router-link
            class="ds-route-link"
            :to="{ path: item.path }"
            v-if="index > 0"
          >
            <!-- Temp until ChainAPI moves out of the docs -->
            <img
              :src="item.iconInactive"
              class="ds-icon-shrink-chainapi"
              v-if="!item.active && item.name === 'ChainAPI'"
            />
            <!-- For ChainAPI update the v-if statement -->
            <img
              :src="item.iconInactive"
              class="ds-icon-shrink"
              v-if="!item.active && item.name !== 'ChainAPI'"
            />
            <span class="ds-list-line-name">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ds-divider"></div>
  </div>
</template>

<script>
import { env, latestVersion, latestOisVersion } from '../config.js';

export default {
  name: 'document-sets',
  data: () => ({
    docSets: [
      {
        name: 'Airnode',
        iconActive: '/img/01-Airnode-State=Active@2x.png',
        iconInactive: '/img/01-Airnode-State=Default@2x.png',
        path: latestVersion,
      },
      {
        name: 'OIS',
        iconActive: '/img/ois-active.png',
        iconInactive: '/img/ois-inactive.png',
        path: latestOisVersion,
      },
      {
        name: 'QRNG',
        iconActive: '/img/Quantum-State=Active@2x.png',
        iconInactive: '/img/Quantum-State=Default@2x.png',
        path: '/qrng/',
      },
      {
        name: 'ChainAPI',
        iconActive: '/img/chainapi-active.png',
        iconInactive: '/img/chainapi-inactive.png',
        path: '/chainapi/',
      },
      {
        name: 'dAPIs',
        iconActive: '/img/Beacons-active.png',
        iconInactive: '/img/Beacons-default.png',
        path: '/dapis/',
      },
      {
        name: 'DAO Members',
        iconActive: '/img/02-DAO-State=Active@2x-1.png',
        iconInactive: '/img/02-DAO-State=Default@2x-1.png',
        path: '/dao-members/',
      },
      {
        name: 'API3',
        iconActive: '/img/03-API3-State=Active@2x-2.png',
        iconInactive: '/img/03-API3-State=Default@2x-2.png',
        path: '/api3/',
      },
    ],
    unpublishedDocSets: ['/operations', '/dev'],
    env: env,
    showDocSets: false,
    hidePickList: false, // Hiding pick list when route path is /dev or /operations
    isMounted: false, // When the page is mounted show icons to avoid flickering
  }),
  watch: {
    $route(event) {
      this.unpublishedDocSet();
      this.selectIcon(event.path);
    },
  },
  methods: {
    /**
     * Checks if the current doc set is unpublished in the pick list. Then
     * hides the sidebar picklist if it is unpublished.
     * /operations and /dev
     */
    unpublishedDocSet() {
      const paths = this.unpublishedDocSets;
      const pathArr = this.$route.path.split('/');
      this.hidePickList = paths.includes('/' + pathArr[1]);
    },
    selectIcon(path) {
      // Close the mobile list
      this.showDocSets = false;

      // Sort the docSets array
      this.docSets.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : b.name.toLowerCase() > a.name.toLowerCase()
          ? -1
          : 0
      );

      // Place the current docSet at the top of the array.
      for (var i = 0; i < this.docSets.length; i++) {
        // Airnode (versioned)
        if (
          path.indexOf('/airnode/v') > -1 &&
          this.docSets[i].path.indexOf('/airnode/v') > -1
        ) {
          let arr = path.split('/');
          this.docSets[i].path = '/' + arr[1] + '/' + arr[2] + '/';
        }
        // OIS (versioned)
        else if (
          path.indexOf('/ois/v') > -1 &&
          this.docSets[i].path.indexOf('/ois/v') > -1
        ) {
          let arr = path.split('/');
          this.docSets[i].path = '/' + arr[1] + '/' + arr[2] + '/';
        }

        // Splice and push the path to top of doc set array
        if (path.indexOf(this.docSets[i].path) > -1) {
          const obj = this.docSets[i];
          this.docSets.splice(i, 1);
          this.docSets.unshift(obj);
        }
      }
    },
    getArrowSrc() {
      if (!this.showDocSets) return '/img/arrow-right-16.png';
      else return '/img/arrow-down-16.png';
    },
  },
  mounted() {
    // Code that will run only after the entire view has been rendered
    this.$nextTick(function () {
      this.unpublishedDocSet();
      this.selectIcon(this.$route.path);
      this.isMounted = true;
    });
  },
};
</script>

<style scoped>
.ds-list-line {
  font-size: x-large;
  font-weight: 500;
}
.ds-list-line-name {
  margin-top: 5px;
  color: gray;
  margin-left: 10px;
}

.ds-icon-shrink {
  width: 45px;
  height: 39px;
  margin-top: 8px;
}
.ds-icon-shrink-chainapi {
  width: 39px;
  height: 39px;
  margin-top: 8px;
  margin-right: 7px;
}

.ds-arrow {
  margin-left: 5px;
  height: 16px;
  width: 16px;
  margin-top: 15px;
  cursor: pointer;
}

.ds-route-link {
  display: flex;
  flex-flow: row;
  align-items: left;
  justify-content: left;
  padding: 5px;
  color: #a0a0a0;
}

.ds-divider {
  border-top: solid 2px lightgrey;
  margin-top: -5px;
  margin-bottom: -12px;
}
</style>
